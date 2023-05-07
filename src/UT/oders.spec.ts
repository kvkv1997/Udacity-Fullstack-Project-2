import { Order, OrderStore } from '../models/orders'
import dotenv from 'dotenv'
import axios from 'axios'
import app from '../server'
import supertest from "supertest";
let http = supertest.agent(app)
const backendServer = 'http://localhost:3000/api'
dotenv.config()
const store = new OrderStore();

describe("Testing Order model", () => {
    it('should have an index method', () => {
        expect(store.index).toBeDefined();
    });
});
describe('Testing Order Endpoints', () => {
    const loginURL = `${backendServer}/users/authenticate`
    const payloadLogin = {
        userName: 'tu.nguyenhoang',
        password: 'admin123'
    }
    it('should have list of orders', async () => {
        const result = await axios.get(`${backendServer}/orders`)
        expect(result.status).toBe(200)
    });
    it('should have list order by user and require token ', async () => {
        const login = await axios.post(loginURL, payloadLogin)
        const loginToken = login.data.token
        let config = {
            headers: { Authorization: `Bearer ${loginToken}` }
        }
        const userId = 1
        const url = `${backendServer}/orders/user/${userId}`
        const result = await axios.get(url, config)
        expect(result.status).toBe(200)
    });
    it('should get list of completed order of user and require token ', async () => {
        const login = await axios.post(loginURL, payloadLogin)
        const loginToken = login.data.token
        let config = {
            headers: { Authorization: `Bearer ${loginToken}` }
        }
        const userId = 1
        const url = `${backendServer}/orders/user/${userId}/order`
        const result = await axios.get(url, config)
        expect(result.status).toBe(200)
    });
    it('should change status of order to complete', async () => {
        const orderId = 4;
        const result = await axios.put(`${backendServer}/orders/${orderId}`)
        expect(result.data.data.status).toEqual('complete')
    });
    it('should create new order with active status', async () => {
        const newOrder = {
            product_id: 3,
            user_id: 1,
            quantity: 10,
        }
        const login = await axios.post(loginURL, payloadLogin)
        const loginToken = login.data.token
        let config = {
            headers: { Authorization: `Bearer ${loginToken}` }
        }
        const result = await axios.post(`${backendServer}/orders`, newOrder, config)
        expect(result.data.data.status).toEqual('active')
    })
})
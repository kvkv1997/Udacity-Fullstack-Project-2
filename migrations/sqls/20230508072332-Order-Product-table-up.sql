/* Replace with your SQL commands */
CREATE TABLE IF NOT EXISTS order_product (
              order_id bigint,
              product_id bigint,
              FOREIGN KEY (order_id) REFERENCES public.order(id),
              FOREIGN KEY (product_id) REFERENCES public.product(id),
              PRIMARY KEY (order_id, product_id)
            )`
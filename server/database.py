import psycopg as pg
import logging

def connect():

    try:
        conn = pg.connect(
            host="localhost",
            dbname="test",
            user="admin",
            password="1234"
        )
        
        with conn.cursor() as cur:
                cur.execute("""
                    CREATE TABLE test (
                        id serial PRIMARY KEY,
                        num integer,
                        image text)      
                """)
                
                cur.execute(
                    "INSERT INTO test (num, image) VALUES (%s,%s)",
                    (100, "HELLO")
                            )
                
                x = cur.execute("SELECT * FROM test")
                
                for record in x:
                    print(record)
                    
                conn.commit()
            
        print('success')
    except:
        logging.exception('')
        




if __name__ == '__main__':
    connect()

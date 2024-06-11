import psycopg

with psycopg.connect('dbname=websiteDB user=postgres password=password host=localhost') as conn:


    with conn.cursor() as cur:

        cur.execute("""
            INSERT INTO posts (title, body, image)
            VALUES ('a', 'b', 'c')
            """)

        cur.execute("""
            SELECT * FROM postInfo;
            """)
        
        for record in cur:
            print(record)

    conn.commit()
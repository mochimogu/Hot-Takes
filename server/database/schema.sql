
CREATE TABLE htusers (
    ID SERIAL PRIMARY KEY,
    USERNAME VARCHAR(50) UNIQUE NOT NULL,
    EMAIL VARCHAR(100) UNIQUE NOT NULL,
)

CREATE TABLE posts (
    
    PID SERIAL PRIMARY KEY,
    USER_ID INT REFERENCES htusers(ID) ON DELETE CASCADE,
    POST TEXT,
    PUBLISHED BOOLEAN DEFAULT FALSE,
    CREATED DATE DEFAULT CURRENT_DATE,
    LAST_EDIT DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

)

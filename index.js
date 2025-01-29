const Redis = require("ioredis");

const redis = new Redis({
    sentinels: [
        {
            host: "localhost",
            // host: "127.0.0.1",
            // host: "192.168.1.66",
            port: 26379
        },
    ],
    name: "mymaster",
    password: 'your_redis_password',
    tls: false,
});

redis.set("foo", "bar");

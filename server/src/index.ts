import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import 'dotenv/config';
import mikroConfig from "./mikro-orm.config";
import express from 'express';

const main = async () => {
    const orm = await MikroORM.init(mikroConfig);
    await orm.getMigrator().up();

    const app = express();

    app.get('/', (_, res) => {
        res.send("hello");
    });

    app.listen(3000, () => {
        console.log('server started on localhost:3000')
    });
};

main().catch((err) => {
    console.error(err);
})



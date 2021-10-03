import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import 'dotenv/config';

const main = async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        dbName: 'forum',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        type: 'postgresql',
        debug: !__prod__,
    });

    const post = orm.em.create(Post, {title: 'my first post'})
    await orm.em.persistAndFlush(post);
    console.log("----------sql 2-----------")
    await orm.em.nativeInsert(Post, { title: "my first post 2"})
};

main().catch((err) => {
    console.error(err);
})



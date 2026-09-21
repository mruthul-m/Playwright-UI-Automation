import test, { expect } from "@playwright/test";
import { env } from "../utils/env";


test('Get all User', async ({request}) => {

    const auth = Buffer.from(`${env.username}:${env.password}`).toString('base64');
    const response = await request.get('http://localhost:8080/41/getAllList', {
        headers: {
            Authorization: `Basic ${auth}`
        }
    })
    expect(response.status()).toBe(200);
    console.log(await response.text())

})
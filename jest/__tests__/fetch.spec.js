/*
 * @Descripttion: 
 * @Author: BZR
 * @Date: 2022-08-12 18:14:53
 * @LastEditTime: 2022-08-12 18:26:44
 */
const { getData } = require("../fetch");
const axios = require("axios");
jest.mock("axios");
it("fetch", async () => {
    // 模拟第一次接收到的数据
    axios.get.mockResolvedValueOnce("123");
    // 模拟每一次接收到的数据
    axios.get.mockResolvedValue("456");
    const data1 = await getData();
    const data2 = await getData();
    expect(data1).toBe("123");
    expect(data2).toBe("456");

});
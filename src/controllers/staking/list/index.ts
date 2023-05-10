import {Request, Response} from "express";

const handler = async (req: Request, res: Response) => {
    // @ts-ignore
    const response = await global.api.staking.getStakingProductPosition();
    res.send(response.data);
}
export default handler;

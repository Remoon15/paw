import crypto from "crypto";

export const hashData = async (refID: string) => {
    const appUsername = process.env.APP_USERNAME_DIGIFLAZZ ?? ""
    const appDevKey = process.env.APP_PRODUCTIONKEY_DIGIFLAZZ

    const data = appUsername + appDevKey + refID;
    const md5 = crypto.createHash('md5').update(data).digest('hex');
    return md5;
};

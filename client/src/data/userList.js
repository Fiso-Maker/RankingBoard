import React from "react";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";

const currentResult = atom({
    key: `selectedAccountRowData`,
    default: {
        idx: 0,
        userIdx: "",
        score: 0,
        updateDt: "",
        season: 0,
    },
});

const userListSelector = selector({
    key: "userListSelector", // unique ID (with respect to other atoms/selectors)
    get: async ({ get }) => {
        get(Trigger);

        return await getUserList();
    },
});

const getUserList = async () => {
    let res = await axios.get("/api/user/UserList");

    return res.data;
};

const Trigger = atom({
    key: "Trigger", // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});

export default { currentResult, userListSelector, Trigger };

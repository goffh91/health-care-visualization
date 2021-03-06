import { enableES5, produce } from "immer";

const useProduce = (...args) => {
    enableES5();
    return produce(...args);
};

export default useProduce;

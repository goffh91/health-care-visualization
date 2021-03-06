import * as appTypes from './types';

export const getApp = state => state.app;

export const changePagination = (pagination) => ({
    type: appTypes.CHANGE_PAGINATION,
    pagination
});

export const changeSorters = (columnKey, order) => ({
    type: appTypes.CHANGE_SORTER,
    columnKey,
    order
});

export const getDetailData = (personId) => ({
    type: appTypes.VIEW_DETAIL,
    personId
});

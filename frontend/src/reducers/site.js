import {DATE_FILTER, LINE_CHART, LOADING_SCREEN, PIE_CHART, SNACKBAR, TABLE_IMAGE,} from '../actions/types';
import React from 'react';

const date = new Date();
const end_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

export const initialState = {
    snackbar_show: false,
    snackbar_message: "",
    snackbar_error: true,
    loading_screen: false,
    pie_chart: null,
    line_chart: null,
    start_date: null,
    end_date: end_date,
    image_table: {
        count: null,
        previous: null,
        next: null,
        results: []
    },
};
export default function (state = initialState, action) {
    switch (action.type) {

        case SNACKBAR: {
            return {
                ...state,
                snackbar_show: action.snackbar_show,
                snackbar_message: action.snackbar_message
            }
        }

        case LOADING_SCREEN: {
            return {
                ...state,
                loading_screen: action.loading_screen,
            }
        }

        case PIE_CHART: {
            return {
                ...state,
                pie_chart: {
                    labels: action.labels,
                    datasets: [
                        {
                            data: action.data,
                            backgroundColor: action.colors,
                            borderWidth: 1,
                        },
                    ]
                }
            }
        }

        case LINE_CHART: {
            return {
                ...state,
                line_chart: {
                    labels: action.labels,
                    datasets: action.datasets
                }
            }
        }

        case DATE_FILTER: {
            return {
                ...state,
                start_date: action.start_date,
                end_date: action.end_date,
                image_table: {
                    count: null,
                    previous: null,
                    next: null,
                    results: []
                },
            }
        }

        case TABLE_IMAGE: {

            return {
                ...state,
                image_table: {
                    count: action.image_table.count,
                    next: action.image_table.next,
                    previous: action.image_table.previous,
                    results: [...state.image_table.results, ...action.image_table.results].filter((result, index, self) =>
                        index === self.findIndex((r) => (
                            r.id === result.id
                        ))
                    )
                },
            }
        }

        default:
            return state;
    }

}

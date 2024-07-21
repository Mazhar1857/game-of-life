import React, { useEffect, useState } from 'react'
import './PlayBoard.css'
import { useDispatch, useSelector } from 'react-redux';
import { startStopAction } from '../store/startStopSlice';
import { arrayAction } from '../store/arraySlice';

const PlayBoard = () => {
    const startBtn = useSelector(state => state.startStop);
    const array = useSelector(state => state.array);
    const dispatch = useDispatch();

    useEffect(() => {
        let arr = [];

        for (let i = 0; i < 30; i++) {
            arr[i] = [];
            for (let j = 0; j < 30; j++) {
                arr[i][j] = { r: i, c: j, s: false };
            }
        };


        const defLive = [[12, 14], [13, 15], [14, 15], [14, 14], [14, 13]]
        defLive.forEach((item) => {
            arr[item[0]][item[1]].s = true;
        });

        dispatch(arrayAction.setArray(arr));
    }, []);



    const handleClick = (r, c) => {

        let newArray = array.map(row => row.map(col => ({ ...col })))
        newArray[r][c].s = !newArray[r][c].s

        dispatch(arrayAction.setArray(newArray));
    };




    const liveNeighbourCount = (row, col) => {
        const neighbour = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
        let count = 0;

        neighbour.forEach((neighbourItem) => {
            let r = row + neighbourItem[0];
            let c = col + neighbourItem[1];

            if (r >= 0 && r < 30 && c >= 0 && c < 30 && array[r][c].s) {
                count++;
            }
        });

        return count;

    };

    useEffect(() => {

        if (startBtn === 'stop') {

            const interval = setInterval(() => {


                let newArray = array.map(row => row.map(col => ({ ...col })));


                array.forEach((row, rowInd) => {

                    row.forEach((col, colInd) => {

                        if (liveNeighbourCount(rowInd, colInd) < 2 || liveNeighbourCount(rowInd, colInd) > 3) {
                            newArray[rowInd][colInd].s = false;
                        }
                        if (liveNeighbourCount(rowInd, colInd) == 3) {
                            newArray[rowInd][colInd].s = true;
                        }

                    })
                })


                dispatch(arrayAction.setArray(newArray))


            }, 250);
            return () => clearInterval(interval);
        };

    }, [startBtn, array]);


    useEffect(() => {
        let flag = false;

        if (startBtn === 'stop') {
            array.forEach((row) => {
                row.forEach((col) => {
                    if (col.s) {
                        flag = true
                    }
                })
            })

            if (!flag) {
                dispatch(startStopAction.toggleStartStop())
            }
        }
    }, [array])


    return (
        <div className='play-board'>
            {array.map((row, indRow) => (
                row.map(((col, indCol) => (<div key={`${indRow}${indCol}`} onClick={() => handleClick(indRow, indCol)} className={array[indRow][indCol].s ? 'live' : 'dead'}></div>)))
            ))}
        </div>
    )
}

export default PlayBoard

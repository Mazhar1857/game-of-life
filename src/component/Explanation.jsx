import React, { useEffect } from 'react'
import './Explanation.css'
import clear from '../assets/svg/clear.svg'
import img_1 from '../assets/img/img_1.png'
import img_2 from '../assets/img/img_2.png'
import img_3 from '../assets/img/img_3.png'
import img_4 from '../assets/img/img_4.png'
import { useDispatch, useSelector } from 'react-redux'
import { explanationAction } from '../store/explanationSlice'


const Explanation = () => {
    const closeBtn = useSelector(store => store.explanation);
    const dispatch = useDispatch();

    const handleCloseBtn = () => {
        dispatch(explanationAction.toggleExplanation())
    }

    useEffect(() => {
        if (closeBtn === 'open') {
            document.documentElement.classList.add('model-open')
            return () => {
                document.documentElement.classList.remove('model-open')
            }
        }
    })

    return (
        <div className={`explanation ${closeBtn}`}>
            <div>
                <div className='button' onClick={handleCloseBtn}>
                    <button ><img src={clear} alt="" /></button>
                </div>

                <div className='heading container'>
                    <h1>Game of Life Explanation</h1>
                    <p>The Game of Life is not your typical computer game. It is a cellular automaton, and was invented by Cambridge mathematician John Conway.</p>
                    <p>This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a grid of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.</p>
                </div>

                <div className='rules container'>
                    <h2>Rules</h2>
                    <div>
                        <h3>For a space that is populated:</h3>
                        <h3>Examples</h3>
                    </div>
                    <div>
                        <p>Each cell with one or no neighbors dies, as if by solitude.</p>
                        <img src={img_1} alt="" />
                    </div>
                    <div>
                        <p>Each cell with four or more neighbors dies, as if by overpopulation.</p>
                        <img src={img_2} alt="" />
                    </div>
                    <div>
                        <p>Each cell with two or three neighbors survives.</p>
                        <img src={img_3} alt="" />
                    </div>
                    <h3>For a space that is empty or unpopulated:</h3>
                    <div>
                        <p>Each cell with three neighbors becomes populated.</p>
                        <img src={img_4} alt="" />
                    </div>
                </div>

                <div className='more-information container'>
                    <h2>More information</h2>
                    <p>Video’s about the Game of Life</p>
                    <div className='videos'>
                        <div>
                            <iframe width="279" height="210" src="https://www.youtube.com/embed/CgOcEZinQ2I?si=M--yck-90miOXDOS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <p>The rules are explained in Stephen Hawkings’ documentary The Meaning of Life</p>
                        </div>

                        <div>
                            <iframe width="279" height="210" src="https://www.youtube.com/embed/R9Plq-D1gEk?si=fqsT1YKmH_8ZRUhr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <p>John Conway himself talks about the Game of Life</p>
                        </div>
                    </div>
                    <p>Interesting articles about John Conway</p>
                    <ul>
                        <li><a href="https://www.theguardian.com/science/2015/jul/23/john-horton-conway-the-most-charismatic-mathematician-in-the-world" target='_blank'>John Horton Conway: the world’s most charismatic mathematician</a> (The Guardian)</li>

                        <li><a href="https://www.quantamagazine.org/john-conway-solved-mathematical-problems-with-his-bare-hands-20200420/" target='_blank'>John Conway Solved Mathematical Problems With His Bare Hands</a> (Quanta Magazine)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Explanation

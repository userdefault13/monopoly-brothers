import React, { useLayoutEffect } from 'react';
import Phaser from 'phaser';
import GameScene from '../scenes/GameScene';
import '../App.css';

let init = false;
const GamePage = () => {
    useLayoutEffect(() => {
        if (!init) {
            init = true;
            const config = {
                type: Phaser.AUTO,
                backgroundColor: 0xcae9e1,
                scale: {
                    width: 2101,
                    height: 2101,
                    mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
                    parent: 'stage',
                    autoCenter: Phaser.Scale.CENTER_BOTH
                },
                scene: [GameScene],
            };
            
            new Phaser.Game(config);
            
        }
        return () => { 
            console.log('unmount')
        }
    }, [])

    return (
        <div style={{ display:"flex", flexDirection: "column", height: 'calc(100vh)', overflow: 'hidden'}}>
            <div id="stage"></div>
            <div className="flex">
                <h3>Controller</h3>
                <button>Left</button>
                <button>Up</button>
                <button>Right</button>
                <button>Down</button>
            </div>
            
        </div>
    )
}


export default GamePage;

import React from "react";
import {Label, Image, ResponsiveEmbed} from "react-bootstrap";
import steps from "../img/banner/easy-steps.png";

export default class HowWorksComp extends React.Component {
    render() {
        return (
            <section className="section section-main">
                <header className="section-header">
                    <div className="container">
                        <h1 className="section-header-title">
                            Viajar es así de sencillo: &nbsp; <Label>Sin intermediarios!</Label>
                        </h1>
                        <div className="section-header-text" height={500}>
                            <h3>Tu solución de transporte en tres pasos  </h3>
                            <Image responsive src={steps} height={400}/>
                        </div>

                    </div>
                </header>
                <div >
                    <ResponsiveEmbed a16by9>
                        <iframe width="853" height="480" src="https://www.youtube-nocookie.com/embed/4_Tw2Fnd21Q?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" autoPlay={1} allowfullscreen/>
                        {/*<iframe width="640" height="500" src="https://www.youtube.com/embed/4_Tw2Fnd21Q" frameborder="0" autoPlay={1} allowfullscreen/>*/}
                    </ResponsiveEmbed>
                </div>
            </section>
        );
    }
}

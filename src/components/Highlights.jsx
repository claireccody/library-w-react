import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () =>{

    return (
    <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Why choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight 
                    icon={<FontAwesomeIcon icon="fa-solid fa-bolt-lightning"></FontAwesomeIcon>}
                    title="Easy and Quick"
                    para="Get access to the book you purchased online instantly!" />
                                        <Highlight 
                    icon={<FontAwesomeIcon icon="fa-solid fa-book-open"></FontAwesomeIcon>}
                    title="10,000+ Boks"
                    para="Library has books in all your favorite categories" />
                                        <Highlight 
                    icon={<FontAwesomeIcon icon="fa-solid fa-tags"></FontAwesomeIcon>}
                    title="Affordable"
                    para="Get your hands on popular books for as little as $10." />
                </div>
            </div>
        </div>
    </section> )
}

export default Highlights;
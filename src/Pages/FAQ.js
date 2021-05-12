import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import {LinkContainer} from 'react-router-bootstrap';
import Nav from "react-bootstrap/Nav";
import Header from '../Layout/Header';

const FAQ = () => {
    return (
        <div className="faq-page">
            <Header/>
            <CardDeck>
                <Card className='card'>
                    <Card.Title>
                        Will my cloud catch on fire if I leave it plugged in?
                    </Card.Title>
                    <Card.Text>
                        Nope! The strip of lights inside the cloud are LEDs, which do not get hot.
                        There is also a strip of plastic covering the strip so that it will not
                        touch the metal frame that forms the cloud body. The micro-controller inside is also
                        protected inside a plastic box, and the proper power supply needed has been calculated based on
                        the length of the LED strip.
                        <br />
                        Essentially, in order for the cloud to catch on fire, you would either need a short circuit or
                        and underpowered power supply, both have which been accounted for. Unless you deliberately set it on fire
                        or place it too close to an open flame, your cloud is perfectly safe to leave plugged in for hours.
                    </Card.Text>
                </Card>

                <Card className='card'>
                    <Card.Title>
                        Can you explain how you price your clouds?
                    </Card.Title>
                    <Card.Text>
                        Clouds start at 2 feet length by 1 foot diameter; these are priced at $100 each,
                        which includes the cost of custom coding. Increasing the length will cause the price to go up by $50
                        per additional foot (i.e. a 3 foot cloud would be $150, a 4 foot cloud is $200, so on).
                        <br />
                        The baseline price for the unicorn head sculpture is $200. Subsequent increases in size, requests for a different crystal
                        for the horn, and other changes to the baseline piece may result in slightly higher prices, however I strive to be fair to both myself
                        and the client. The goal is to make a great unicorn or cloud lamp that you are happy with that doesn't totally break the bank.
                    </Card.Text>
                </Card>

                <Card className='card'>
                    <Card.Title>
                        Can you make some other shape or animal light up for me?
                    </Card.Title>
                    <Card.Text>
                        If you have some idea for a different cloud sculpture other than the ones listed, feel free to leave a detailed request on the contact page.
                        While I may not be able to make everything (yet), I'm up for new creative ventures!
                    </Card.Text>
                </Card>

                <Card.Footer className='footer'>
                    For any other questions you may have that are not featured,
                    <LinkContainer exact to='/contact'>
                        <Nav.Link>click here.</Nav.Link>
                    </LinkContainer>

                </Card.Footer>
            </CardDeck>
        </div>
    )
};
export default FAQ;

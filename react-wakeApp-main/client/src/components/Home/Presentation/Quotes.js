import quotePic from './quote-open.png'

const Quotes = () => {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>


            <div style={{ width: "max-content" }}>
                <img src={quotePic} width={50} alt="quote" className="quote" />
                <div className="textQuote">
                    WakeApp was the app I needed. Easy, fast and reliable. I recommend it!
                </div>
                <div className="authorQuote">
                    Bob
                </div>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <img src={quotePic} width={50} className="rotate180 quote" alt="quote" />
                </div>
            </div>

            <div style={{ width: "max-content", marginLeft: "auto", marginTop: 10 }}>
                <img src={quotePic} width={50} alt="quote" className="quote" />
                <div className="textQuote">
                    Thanks to WakeApp, I feel safer when I'm on a night trip               </div>
                <div className="authorQuote">
                    John Doe
                </div>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <img src={quotePic} width={50} className="rotate180 quote" alt="quote" />
                </div>
            </div>


            <div style={{ width: "max-content", marginRight: "auto", marginTop: 10 }}>
                <img src={quotePic} width={50} alt="quote" className="quote" />
                <div className="textQuote">
                    Wake App can save lives, it is just incredible !
                </div>
                <div className="authorQuote">
                    Alice
                </div>
                <div style={{ display: 'flex', justifyContent: 'end' }}>
                    <img src={quotePic} width={50} className="rotate180 quote" alt="quote" />
                </div>
            </div>

        </div>

    );
}

export default Quotes;
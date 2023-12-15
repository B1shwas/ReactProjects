export const HeroSection = () => {
    return(
        <>
        <main className="hero container">
            <div className="hero-content">
                <div className="hero-text">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p className="hero-paragraph">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="sec-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icon">
                        <img src="/images/flipkart.png" alt="Flipkart" />
                        <img src="/images/amazon.png" alt="Amazon" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="Shoe Image" />
            </div>
        </main>
        </>
    )
}
import React from 'react'
import './Widgets.css'
function Widgets() {
    return (
        <div className="widgets">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2F20531316728%2Fposts%2F10154009990506729%2F&show_text=true&width=552&height=274&appId"
            width="340"
            height="500"
            style={{border: "none",overflow:"hidden"}}
            scrolling="no"
            frameBorder="0"
            allowTransparency="True"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                
            </iframe>
        </div>
    )
}

export default Widgets 

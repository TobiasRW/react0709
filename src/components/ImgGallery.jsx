export default function ImgGallery() {
    return (
        <div className="galleryCont">
        <div className="">
            <h2>Galleri</h2> <br />
            <p>Velkommen til vores inspirerende rejsebilledgalleri, hvor vi inviterer dig til en visuel rejse gennem vores utrolige eventyr. Hvert billede er et vindue til vores rejser, en skattekiste fyldt med farver, kulturer og uforglemmelige øjeblikke. <br /><br />Disse billeder fanger skønheden i solnedgange over eksotiske strande, kulturelle oplevelser i fjerne lande og den storslåede natur, vi har haft privilegiet at udforske. De er mere end bare fotos; de er historier, minder og inspiration til dine egne eventyr. <br /><br />Vi lægger også stor vægt på bæredygtig rejse, og vores billeder afspejler vores forpligtelse til at bevare de steder, vi besøger. Fra øde bjerglandskaber til pulserende byer, vores billeder viser skønheden i vores verden og opmuntrer til at beskytte den. <br /><br />Tag dig tid til at udforske vores rejsebilledgalleri, lad dig inspirere til at udforske verden, og lad os sammen skabe uforglemmelige minder. Rejsen begynder her.</p>
        </div>
        <div className="picGallery">
            <input type="radio" id="dot1" name="dotGroup" defaultChecked />
            <label htmlFor="dot1" />
            <div className="slide background1"></div>

            <input type="radio" id="dot2" name="dotGroup" />
            <label htmlFor="dot2" />
            <div className="slide background2"></div>

            <input type="radio" id="dot3" name="dotGroup" />
            <label htmlFor="dot3" />
            <div className="slide background3"></div>
        </div>
    </div>
    )
}
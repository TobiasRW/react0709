import ImgGallery from "../components/ImgGallery";

export default function Hjem() {
    return (
        <div className="homeWrapper">
            <div className="videoCont">
                <div className="">
                    <h1>Rønnes Rejser - Din Vej til Eventyr Verden Over</h1><br />
                    <p>Rønnes Rejser er din port til verden af eventyr. Som et velrenommeret rejsebureau specialiserer vi os i at skabe uforglemmelige rejseoplevelser. Med års erfaring og dedikation til vores kunder tilbyder vi skræddersyede rejser, der opfylder dine drømme. <br /><br />Vores erfarne team af rejsekonsulenter stræber efter at opfylde dine forventninger. Uanset om du søger kultur, afslapning, eller spænding, har vi noget for dig. Fra eksotiske destinationer til ikoniske byer, tilbyder vi en bred vifte af rejseoplevelser, der passer til enhver rejsendes smag. Lad Rønnes Rejser være din guide til at udforske verden på din måde.</p>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/9vN_htf-05w?si=jJy8Fnmxpx2B4Do1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            < ImgGallery />
        </div>


    )
}
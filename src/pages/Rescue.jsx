export function Rescue (){
    return(<>
        <div>Rescue</div>
        <video controls>
            <source src="/src/videos/catchcatpart1.mp4" type="video/mp4" />
            <source src="/src/videos/catchcatpart2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </>
    )
}
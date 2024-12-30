import Image from "next/image";

export default function Navbar(){
    return (
        <>
        <div className="flex py-2 px-6">
        
        <Image className="w-6 h-6" src={"/digitalVapour100.png"} alt="DV" width={100} height={100} />
        
        <h1 className="text-xl w-40 px-2 font-bold self-baseline text-orange-500">DigitalVapour</h1>
        </div>
        </>
    )
}
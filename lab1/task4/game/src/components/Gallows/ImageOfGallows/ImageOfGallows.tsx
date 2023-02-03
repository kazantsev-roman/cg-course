import { useSelector } from "react-redux";
import { GameState } from "../../../store/types/GameState";

const ImageOfGallows = () =>
{
	const numberOfAttempts = useSelector((state: GameState) => state.numberOfAttempts)

	return (
		<svg width={800} height={500}>
			<g>
				<rect width={680} height={25} x={120} y={375} fill={"#868686"}/>
				<rect width={40} height={75} x={140} y={400} fill={"#868686"}/>
				<rect width={40} height={75} x={740} y={400} fill={"#868686"}/>
			</g>
			{
				numberOfAttempts < 10 &&
                <g>
                    <polygon points="440,375 480,375 440,475 400,475" fill={"#5a5a5a"}/>
                    <polygon points="600,375 650,375 610,475 560,475" fill={"#626262"}/>
                    <polygon points="432,395 430,400 591,400 593,395" fill={"#c1c1c1"}/>
                    <polygon points="420,425 418,430 579,430 581,425" fill={"#b5b5b5"}/>
                    <polygon points="400,465 395,460 567,460 569,465" fill={"#a4a4a4"}/>
                    <polygon points="430,375 441,375 401,475 390,475" fill={"#4f4f4f"}/>
                    <polygon points="600,375 611,375 571,475 561,475" fill={"#4f4f4f"}/>
                </g>
			}
			{
				numberOfAttempts < 9 &&
                <g>
                    <rect width={40} height={375} x={200} y={0} fill={"#868686"}/>
                </g>}
			{
				numberOfAttempts < 8 &&
				<g>
					<rect width={620} height={25} x={100} y={0} fill={"#868686"}/>
					<polygon points="120,25 145,25 200,75 200,100" fill={"#4f4f4f"}/>
				</g>
			}
			{
				numberOfAttempts < 7 &&
				<g>
					<line x1="500" y1="0" x2="500" y2="25" stroke="#765243"/>
					<line x1="504" y1="0" x2="504" y2="25" stroke="#765243"/>
					<line x1="508" y1="0" x2="508" y2="25" stroke="#765243"/>
					<line x1="512" y1="0" x2="512" y2="25" stroke="#765243"/>
					<line x1="516" y1="0" x2="516" y2="25" stroke="#765243"/>
					<line x1="520" y1="0" x2="520" y2="25" stroke="#765243"/>
					<line x1="524" y1="0" x2="524" y2="25" stroke="#765243"/>
					<line x1="528" y1="0" x2="528" y2="25" stroke="#765243"/>
					<line x1="532" y1="0" x2="532" y2="25" stroke="#765243"/>

					<line x1="516" y1="25" x2="516" y2="100" stroke="#765243"/>
					<line x1="510" y1="100" x2="522" y2="100" stroke="#765243"/>
					<line x1="510" y1="102" x2="522" y2="102" stroke="#765243"/>
					<line x1="510" y1="104" x2="522" y2="104" stroke="#765243"/>
					<line x1="510" y1="106" x2="522" y2="106" stroke="#765243"/>
					<circle cx={516} cy={126} r={20} fill={"white"} stroke={"#765243"}/>
				</g>
			}
			{
				numberOfAttempts < 6 &&
				<g>
					<circle cx={516} cy={126} r={20} fill={"#F4CD8A"}/>
				</g>
			}
			{
				numberOfAttempts < 5 &&
				<g>
					<line x1="516" y1="146" x2="516" y2="220" stroke="#765243"/>
				</g>
			}
			{
				numberOfAttempts < 4 &&
				<g>
					<line x1="516" y1="146" x2="490" y2="196" stroke="#765243"/>
				</g>
			}
			{
				numberOfAttempts < 3 &&
				<g>
					<line x1="516" y1="146" x2="542" y2="196" stroke="#765243"/>
				</g>
			}
			{
				numberOfAttempts < 2 &&
				<g>
					<line x1="516" y1="220" x2="500" y2="290" stroke="#765243"/>
				</g>
			}
			{
				numberOfAttempts < 1 &&
				<g>
					<line x1="516" y1="220" x2="532" y2="290" stroke="#765243"/>
				</g>
			}
		</svg>
	)
}

export default ImageOfGallows
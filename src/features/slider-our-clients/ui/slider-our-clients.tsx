import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./slider-our-carousel.module.scss";

interface SliderOurClientsProps {
	data : Array<string>;
	direction: "left" | "right";
}

const responsive = {
	superLargeDesktop: {
		breakpoint: { max: 4000, min: 3000 },
		items: 7,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 7,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 5,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 2,
	},
};

export const SliderOurClients: React.FC<SliderOurClientsProps> = ({
	data,
	direction,
}) => {
	const content = data.map((item,index) => (
		<div key={index} >
			<img src={item} alt="Logos of clients" className={styles.image} />
		</div>
	))
	return (
		<div >
			<Carousel
				    responsive={responsive}
					infinite
					arrows={false}
					autoPlay
					autoPlaySpeed={2} 
					customTransition="transform 30000ms linear" 
					transitionDuration={30000} 
					containerClass={styles.carousel}
					itemClass={styles.carouselItem}
					swipeable={false}
					draggable={false}
					rtl={direction ==="right"}
					
			>
				{content}
			</Carousel>
		</div>
	);
};

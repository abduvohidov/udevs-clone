import { CardSelect } from "@/enitites/card-select/index";
import { SelectTools } from "@/features/select-tools/index";
import { TOOLS_WITH_IMAGE_CONTENT } from "@/shared/lib/contents/instruments-content";
import { Container } from "@/shared/ui/grid/container";
import { Title } from "@/shared/ui/title/index";
import { useState } from "react";
import "./instruments.scss";

export const Instruments = () => {
	const [checkedValue, setCheckedValue] = useState<string>("all");
	function getSelectedValue(e: React.ChangeEvent<HTMLInputElement>) {
		setCheckedValue(e.target.value);
	}
	return (
		<section id="instruments" className="instruments">
			<Container>
				<Title>Инструменты</Title>
				<SelectTools getSelectedValue={getSelectedValue} />
				<CardSelect  data={TOOLS_WITH_IMAGE_CONTENT} clickedValue={checkedValue} />
			</Container>
		</section>
	);
};


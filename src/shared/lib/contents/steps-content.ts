import {
	stepsAnalyzeIcon,
	stepsPhoneIcon,
	stepsProposalIcon,
	stepsStartIcon,
	stepsTeamIcon,
} from "@/shared/assets/icons/steps-icons";

export interface IStepsContent {
	image: string;
	title: string;
	subtitle: string;
}

export const STEPS_CONTENT: Array<IStepsContent> = [
	{
		image: stepsPhoneIcon,
		title: "Cвязь",
		subtitle: "Отправьте нам свой запрос на проект или идею проекта.",
	},
	{
		image: stepsAnalyzeIcon,
		title: "Анализ",
		subtitle: "Мы свяжемся с вами, чтобы уточнить ваши требования к проекту.",
	},
	{
		image: stepsProposalIcon,
		title: "Предложение",
		subtitle:
			"Мы предоставим вам нашу бесплатную, не имеющую обязательной силы заявку.",
	},
	{
		image: stepsTeamIcon,
		title: "Команда",
		subtitle: "Мы выделяем команду под ваши требования.",
	},
	{
		image: stepsStartIcon,
		title: "Старт",
		subtitle: "Вы познакомитесь с командой, и мы начнем.",
	},
];

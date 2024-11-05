import {PlaySvg,QuestionMarkSvg,CodingSvg,CopyPasteSvg} from "../svg"

export const SvgRender = {
  "video":<PlaySvg width={20} height={20}/>,
  "question":<QuestionMarkSvg width={20} height={20}/>,
  "coding":<CodingSvg width={18} height={18}/>,
  "paste":<CopyPasteSvg width={18} height={18}/>
}


export const partList = [
    {
        title:"Video",
        type:"video"
    },
    {
        title:"Article",
        type:"question"
    },
    {
        title:"Quiz",
        type:"question"
    },
    {
        title:"Coding Excercise",
        type:"coding"
    },
    {
        title:"Combined Resource",
        type:"paste"
    }
]
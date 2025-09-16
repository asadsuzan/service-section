import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools-main/utils/data';
import { getBackgroundCSS, getBorderCSS, getBoxCSS, getMultiShadowCSS, getTypoCSS, isValidCSS } from "../../../../bpl-tools-main/utils/getCSS"
const Style = ({ attributes = {}, id, device }) => {
	const { theme = 'vertical', styles = {} } = attributes
	const { body, columns } = styles
	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .q3q4_wrapper`;
	const gridSl = `${blockSl} .cards-grid`;
	const cardSl = `${gridSl} .card-${theme}`;


	return <style dangerouslySetInnerHTML={{
		__html: `
		 


	   ${gridSl}{
	   
			grid-template-columns: repeat(${columns?.desktop}, 1fr);
			row-gap: ${columns?.gapX};
			column-gap: ${columns?.gapY};
	 }



	   
 ${cardSl}{
     ${getBackgroundCSS(body?.bg)}
	 padding:${getBoxCSS(body?.padding?.desktop)};
	 box-shadow:${getMultiShadowCSS(body?.shadow)};
	 ${getBorderCSS(body?.border)}
	 text-align:${body?.align};
}

${cardSl}:hover{
 box-shadow:${getMultiShadowCSS(body?.hover?.shadow)};
}


    
	    ${tabBreakpoint}{

				${gridSl}{
			     grid-template-columns: repeat(${columns?.tablet}, 1fr);
			    }

					   
			${cardSl}{
				padding:${getBoxCSS(body?.padding?.tablet)};
			}

          }

		  ${mobileBreakpoint} {
				${gridSl}{
					grid-template-columns: repeat(${columns?.mobile}, 1fr);
				}
				${cardSl}{
				padding:${getBoxCSS(body?.padding?.mobile)};
			    }
		}










	`}} />;
}
export default Style;
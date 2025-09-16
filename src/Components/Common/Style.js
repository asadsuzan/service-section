import { mobileBreakpoint, tabBreakpoint } from '../../../../bpl-tools-main/utils/data';

const Style = ({ attributes, id, device }) => {
	const mainSl = `#${id}`;
	const blockSl = `${mainSl} .q3q4_wrapper`;
	const gridSl = `${blockSl} .cards-grid`;

	const { styles } = attributes || {}
	const { columns } = styles || {}

	console.log(device);
	return <style dangerouslySetInnerHTML={{
		__html: `
		 


	   ${gridSl}{
	   
			grid-template-columns: repeat(${columns?.desktop}, 1fr);
			row-gap: ${columns?.gapX};
			column-gap: ${columns?.gapY};
	 }

    
	    ${tabBreakpoint}{

				${gridSl}{
			     grid-template-columns: repeat(${columns?.tablet}, 1fr);
			}
          }

		  ${mobileBreakpoint} {
				${gridSl}{
					grid-template-columns: repeat(${columns?.mobile}, 1fr);
				}
		}







	`}} />;
}
export default Style;
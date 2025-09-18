import {
	mobileBreakpoint,
	tabBreakpoint,
} from '../../../../bpl-tools/utils/data';
import {
	getBackgroundCSS,
	getBorderCSS,
	getBoxCSS,
	getColorsCSS,
	getMultiShadowCSS,
	getTypoCSS,
} from '../../../../bpl-tools/utils/getCSS';
const Style = ( { attributes = {}, id } ) => {
	let { theme = 'default', styles = {} } = attributes;
	if ( theme === 'default' ) {
		theme = 'vertical';
	}
	const { body, columns, title, description, icon, diagonal } = styles;
	const mainSl = `#${ id }`;
	const blockSl = `${ mainSl } .q3q4_wrapper`;
	const gridSl = `${ blockSl } .cards-grid`;

	const cardSl = `${ gridSl } .card-${ theme }`;
	const diagonalShapeSl = `${ cardSl } .diagonal-bg`;
	const titleSl = `${ cardSl } .card-title`;
	const descriptionSl = `${ cardSl } .card-description`;
	const iconWrapperSl = `${ cardSl } .icon-wrapper`;

	return (
		<style
			dangerouslySetInnerHTML={ {
				__html: `
		    ${ getTypoCSS( '', title?.typo )?.googleFontLink } 
		    ${ getTypoCSS( titleSl, title?.typo )?.styles } 

		    ${ getTypoCSS( '', description?.typo )?.googleFontLink } 
		    ${ getTypoCSS( descriptionSl, description?.typo )?.styles } 


	   ${ gridSl }{
	   
			grid-template-columns: repeat(${ columns?.desktop }, 1fr);
			row-gap: ${ columns?.gapX };
			column-gap: ${ columns?.gapY };
	 }



		
		${ cardSl }{
			${ getBackgroundCSS( body?.bg ) }
			padding:${ getBoxCSS( body?.padding?.desktop ) };
			box-shadow:${ getMultiShadowCSS( body?.shadow ) };
			${ getBorderCSS( body?.border ) }
			text-align:${ body?.align };
		}

		

		${ cardSl }:hover{
		box-shadow:${ getMultiShadowCSS( body?.hover?.shadow ) };
		}
        ${ diagonalShapeSl }{
		${ getBackgroundCSS( diagonal?.bg ) }
		}
	
		${ titleSl }{
		${ getColorsCSS( title?.colors ) }
		}

		${ descriptionSl }{
		${ getColorsCSS( description?.colors ) }
		}

		${ iconWrapperSl }{
		${ getBackgroundCSS( icon?.bg ) }
		}

		${ iconWrapperSl }::after{
		${ getBackgroundCSS( icon?.bar?.bg ) }
		}
	
         



    
	    ${ tabBreakpoint }{

		${ gridSl }{
		 grid-template-columns: repeat(${ columns?.tablet }, 1fr);
		}
        ${ cardSl }{
			padding:${ getBoxCSS( body?.padding?.tablet ) };
		 }

        }

		  ${ mobileBreakpoint } {
		  ${ gridSl }{
		  grid-template-columns: repeat(${ columns?.mobile }, 1fr);
		  }
		  ${ cardSl }{
		  padding:${ getBoxCSS( body?.padding?.mobile ) };
		  }
		}










	`,
			} }
		/>
	);
};
export default Style;

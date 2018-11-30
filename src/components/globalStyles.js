import { injectGlobal } from '../components/layout';
import * as fonts from '../fonts';

export default injectGlobal`
  @font-face {
    font-family: ReynoldsCaps;
    font-style: normal;
    src: url('${fonts.ReynoldsCaps}');
  }
`;
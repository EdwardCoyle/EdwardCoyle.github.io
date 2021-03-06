import SiteHead from '../site-head';
import Masthead from '../masthead/masthead';
import SVGIcons from '../svg-icons';

const BlogLayout = props => (
  <>
    <SiteHead pageTitle={props.pageTitle} />
    <SVGIcons />
    <Masthead />
    <section id="main" className="blog">
      {props.children}
    </section>
  </>
);

export default BlogLayout;

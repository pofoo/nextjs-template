// dependencies
import clsx from 'clsx';
// elements
import { Text } from 'elements';


/* TYPES */
export interface Content {
    text: string;
}

export interface Props {
    id: string;
    className?: string;
    content: Content;
}

const Header = ( { 
    id,
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { text } = content;

    /* CLASSNAMES */
    const headerClasses = clsx(
        'headers-wrapper',
        className
    );
    
    return (
        <section id={id} className={headerClasses}>
            {
                [ ...Array( 6 ) ].map( ( _, index ) => {
                    /* CONTENT */
                    const headerType = index + 1;
                    const headerText = `${headerType}. ${text}`;

                    return (
                        <Text key={index} className={`header-${headerType}`} 
                            content={{text: headerText}} 
                            Component={`h${headerType}`} />
                    );
                } )
            }
        </section>
    );
}

export default Header;
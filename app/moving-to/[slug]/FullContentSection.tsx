import { MaxWidthContainer } from '@/COMPONENTS/common/MaxWidthContainer';
import TextBanner from '@/COMPONENTS/common/sections/TextBanner';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DOMPurify from 'dompurify'; // Library to sanitize HTML content
import parse, { Element, HTMLReactParserOptions } from 'html-react-parser'; // Library to parse HTML and replace nodes

type Props = {
    fullContent: string;
};

const FullContentSection = ({ fullContent }: Props) => {
    // Sanitize the HTML to prevent XSS attacks
    const sanitizedContent = DOMPurify.sanitize(fullContent);

    // Define the options to replace custom HTML tags with React components
    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            console.log(domNode);

            // Check if the node is an instance of Element and matches <custom-component> tag
            if (domNode instanceof Element && domNode.tagName === 'div') {
                console.log(domNode, 'found it');

                // Replace the custom tag with the ServicesSection React component
                return <>
                    <Stack sx={{ width: "100%", position: 'relative' }}>
                        <TextBanner />
                    </Stack>
                </>;
            }
        },
    };

    // Parse the sanitized HTML and replace custom tags with components
    const parsedContent = parse(sanitizedContent, options);
    console.log(parsedContent, "parsedContent");

    return (
        <MaxWidthContainer sx={{ py: { xs: 4, md: 8 }, flexDirection: 'column' }}>
            <Stack sx={{ maxWidth: 'md' }}>
                <Typography component="div" className="dynamicContent">
                    {parsedContent}
                </Typography>
            </Stack>
        </MaxWidthContainer>
    );
};

export default FullContentSection;

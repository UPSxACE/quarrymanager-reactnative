import { Text, VStack } from "native-base";

export default function DashboardCard({ pedidos, label, cardColor, ...props }) {
    return (
        <VStack
            bg={cardColor}
            paddingLeft='16px'
            paddingRight='16px'
            width='100%'
            paddingBottom='6px'
            paddingTop='4px'
            rounded='4'
            {...props}>
            <VStack
                height='48px'
                borderBottomWidth='1'
                borderColor='white'
            >
                <Text color='white'
                    fontSize='32px'>
                    {pedidos}
                </Text>
            </VStack>
            <VStack>
                <Text color='white'
                    fontSize='12px'
                    fontWeight='bold'
                    height='24px'
                    lineHeight={"24px"}
                    letterSpacing='sm'
                >
                    {label.toUpperCase()}
                </Text>
            </VStack>
        </VStack >
    );
}

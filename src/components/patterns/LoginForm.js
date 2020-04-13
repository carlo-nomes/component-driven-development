import React from 'react';
import {
	Box,
	Grid,
	Button,
	Link,
	Text,
	Input,
	Heading,
	Stack,
} from '../../components';

export default () => (
	<Stack as="form" gap={4}>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '6rem 1fr']}>
			<Text as="label" display="block">
				Username
			</Text>
			<Input type="text" />
		</Grid>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '6rem 1fr']}>
			<Text as="label" display="block">
				Password
			</Text>
			<Input type="password" />
		</Grid>
		<Grid gridGap={[1, 4]} gridTemplateColumns={['1fr', '6rem 1fr']}>
			<Grid gridColumn={[1, 2]} gridGap={3}>
				<Button variant="primary">Log in</Button>
				<Link href="#">Forgot your password?</Link>
				<Text variant="help">
					By using our site you agree to the following{' '}
					<Link href="/" color="inherit">
						Terms of Service
					</Link>
					.
				</Text>
			</Grid>
		</Grid>
	</Stack>
);

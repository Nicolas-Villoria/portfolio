import { Warp, type WarpProps } from '@paper-design/shaders-react';

export default function WarpBackground(props: WarpProps) {
	const defaultProps = {
		speed: 0.4,
		rotation: 0.5,
		style: { width: '100%', height: '100%', position: 'absolute', inset: 0, zIndex: -1 },
	};

	return <Warp {...defaultProps} {...props} style={{ ...defaultProps.style, ...props.style } as React.CSSProperties} />;
}





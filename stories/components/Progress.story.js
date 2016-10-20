import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {StepProgress} from 'src';

storiesOf('basic.Progress', module)
.addWithInfo(
	'StepProgress',
	`
	StepProgress
	~~~js
	import { StepProgress } from 'coursera-ui';
	<StepProgress currentStep={5} totalSteps={5} />
  <StepProgress
    currentStep={3}
    totalSteps={5}
    barMargin={4}
    height={12}
    progressColor="#e9573f"
    backgroundColor="#f9e1e1"
  />
	~~~
	`,
	() => (
	  <div className="container">
		<div className="m-b-2 vertical-box">
		  <StepProgress currentStep={1} totalSteps={5} />
		</div>
		<div className="m-b-2 vertical-box">
		  <StepProgress currentStep={2} totalSteps={5} />
		</div>
		<div className="m-b-2 vertical-box">
		  <StepProgress currentStep={3} totalSteps={5} />
		</div>
		<div className="m-b-2 vertical-box">
		  <StepProgress currentStep={4} totalSteps={5} />
		</div>
		<div className="m-b-2 vertical-box">
		  <StepProgress currentStep={5} totalSteps={5} />
		</div>
		<div className="m-b-2 vertical-box">
		  <StepProgress
				currentStep={3}
				totalSteps={5}
				barMargin={4}
				height={12}
        progressColor="#e9573f"
        backgroundColor="#f9e1e1"
			/>
		</div>

	  </div>
	),
 );

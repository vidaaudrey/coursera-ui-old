import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import {TextField} from 'src';

storiesOf('basic.TextField', module)
.addWithInfo(
    'customized UI / work in progress',
    `
    ---
      You can customize the input any way you like.

      By default, we only overwrites size (to be within min and max) and className (add 'form-control' to maintain style )
    `,
    () => (
      <div className="vertical-box">
        <div className="m-b-2">
          <TextField
            fieldName="url"
            htmlAttributes={{
              type: 'url',
              size: 60,
              defaultValue: 'http://audreyli.me',
              placeholder: 'Type a URL here...',
            }}
          />
        </div>
        <div className="m-b-2">
          <TextField
            fieldName="phone"
            hideLabelText
            isTouched
            validationResult={{phone: 'Not a valid phone number'}}
            extendedInfoHeight={0}
            htmlAttributes={{
              type: 'tel',
              defaultValue: '123-456-789',
              placeholder: 'Type a phone number here...',
              size: 50,
            }}
          />
        </div>
        <div className="m-b-2">
          <TextField
            fieldName="phone"
            hideLabelText
            isTouched
            isDirty
            validationResult={{phone: 'Not a valid phone number'}}
            successMsg="Valid phone number"
            extendedInfoHeight={0}
            htmlAttributes={{
              type: 'tel',
              defaultValue: '',
              placeholder: 'Type a phone number here...',
              style: {width: '100%'},
            }}
          />
        </div>
        <div className="m-b-2">
          <TextField
            fieldName="phone"
            className="p-a-1 text-xs-right"
            isTouched
            isDirty
            successMsg="Valid phone number"
            htmlAttributes={{
              type: 'tel',
              defaultValue: '',
              placeholder: 'Put a phone number here...',
            }}
          />
        </div>
      </div>
    ),
    { inline: true, propTables: [TextField]}
  )
  .addWithInfo(
    'interaction',
    `
    ---
      isTouched and isDirty will determine the main optional element.

      isTouch tells whether the form control has been interacted with.
      isDirty tells wheter the value has changed.

      1. If the content has not changed (isDirty === false) yet, we will not show the error msg
      2. If the control hasn't been interacted with (isTouched === false) , we'll not show any feedback msg (success or error)
      3. Both successMsg and errorMsg are feedbackMsg, and we only show one of them depends on the error state
    `,
    () => (
      <div className="vertical-box">
        <TextField
          fieldName="url"
          isTouched
          isDirty
          successMsg="Valid Url"
          htmlAttributes={{
            type: 'url',
            defaultValue: 'http://audreyli.me',
            placeholder: 'Type a URL here...',
          }}
        />
        <TextField
          fieldName="phone"
          isTouched
          isDirty
          isFullWidth
          validationResult={{phone: 'Not a valid phone number'}}
          htmlAttributes={{
            type: 'tel',
            defaultValue: 'xyz',
            placeholder: 'Type a phone number here...',
          }}
        />
        <TextField
          fieldName="phone"
          isTouched
          validationResult={{phone: 'Not a valid phone number'}}
          htmlAttributes={{
            type: 'tel',
            defaultValue: '',
            placeholder: 'Type a phone number here...',
          }}
        />
        <TextField
          fieldName="email"
          isTouched
          isDirty
          validationResult={{email: 'Not a valid email'}}
          htmlAttributes={{
            type: 'email',
            defaultValue: 'audreyli.me',
            placeholder: 'Type an Email here...',
          }}
        />
      </div>
    ),
    { inline: true, propTables: [TextField]}
  );

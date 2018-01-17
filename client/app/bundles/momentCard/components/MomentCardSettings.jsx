// @flow
import React from 'react';

type MomentCardSettingsState = {};

type MomentCardSettingsProp = {};

export default class MomentCardSettings extends
  React.Component<MomentCardSettingsProp, MomentCardSettingsState> {
  props: MomentCardSettingsProp;
  state: MomentCardSettingsState;

  render() {
    return (
      <div>
        <i className="fa fa-pencil action" />
        <i className="fa fa-trash-o action" />
      </div>
    );
  }
}

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import withShortcutHelper from '/imports/ui/components/shortcut-help/service';
import Button from '/imports/ui/components/button/component';
import cx from 'classnames';
import { styles } from './styles';

const propTypes = {
  toggleClick: PropTypes.func.isRequired,
  isRiseHand: PropTypes.bool.isRequired,
};

class SetStatusButton extends PureComponent {
  render() {
    const {
      intl,
      isRiseHand,
      toggleClick,
      shortcuts,
    } = this.props;

    return (
      <Button
        className={cx(styles.button, isRiseHand || styles.btn)}
        hideLabel
        label={isRiseHand ? intl.formatMessage({ id: 'app.actionsBar.emojiMenu.noneLabel' }) : intl.formatMessage({ id: 'app.actionsBar.emojiMenu.raiseHandLabel' })}
        aria-label={isRiseHand ? intl.formatMessage({ id: 'app.actionsBar.emojiMenu.noneLabel' }) : intl.formatMessage({ id: 'app.actionsBar.emojiMenu.raiseHandLabel' })}
        onClick={toggleClick}
        color={isRiseHand ? 'primary' : 'default'}
        ghost={!isRiseHand}
        icon="hand"
        size="lg"
        circle
        accessKey={shortcuts.raisehand}
      />
    );
  }
}

SetStatusButton.propTypes = propTypes;
export default withShortcutHelper(injectIntl(SetStatusButton),['raisehand']);

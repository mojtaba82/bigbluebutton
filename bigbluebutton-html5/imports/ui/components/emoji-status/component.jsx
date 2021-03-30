import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import Button from '/imports/ui/components/button/component';
import cx from 'classnames';
import { styles } from './styles';

const propTypes = {
  toggleClick: PropTypes.func.isRequired,
  isRiseHand: PropTypes.bool.isRequired,
//  intl: intlShape.isRequired,
};

class SetStatusButton extends PureComponent {
  render() {
    const {
      intl,
      isRiseHand,
      toggleClick,
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
      />
    );
  }
}

SetStatusButton.propTypes = propTypes;
export default injectIntl(SetStatusButton);

import { classNames } from 'shared/lib/classNames/classNames';
import Modal, { ModalProps } from 'shared/ui/Modal/Modal';
import LoginForm from 'features/AuthByUserName/ui/LoginForm/LoginForm';

interface LoginModalProps extends ModalProps{
    className?: string
}

export const LoginModal = ({ className, ...modalProps }: LoginModalProps) => (
    <Modal {...modalProps} className={classNames('', {}, [className])}>
        <LoginForm />
    </Modal>
);

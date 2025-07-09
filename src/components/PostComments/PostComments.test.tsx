import { render, screen, fireEvent } from '@testing-library/react';
import Post from './index'; 

describe('Testes para o componente PostComments', () => {
    test('Deverão ter dois comentários na lista ao fazer envio do formulário', () => {
        
        render(<Post />);
        fireEvent.change(screen.getByTestId('comment-texto'), {
            target: {
                value: 'Oi Gian! Que Batmovel Incrivel',
            },
        });
        fireEvent.click(screen.getByTestId('comment-botao'));

     
        fireEvent.change(screen.getByTestId('comment-texto'), {
            target: {
                value: 'Nossa, o Superman é muito melhor',
            },
        });
        fireEvent.click(screen.getByTestId('comment-botao'));

        expect(screen.getByText('Oi Gian! Que Batmovel Incrivel')).toBeInTheDocument();
        expect(screen.getByText('Nossa, o Superman é muito melhor')).toBeInTheDocument();

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    });

    test('O campo de texto deve ser limpo após o envio do formulário', () => {
        
        render(<Post />);
        const textarea = screen.getByTestId('comment-texto');
        const button = screen.getByTestId('comment-botao');

        
        fireEvent.change(textarea, {
            target: {
                value: 'Comentário de teste para limpar o campo.',
            },
        });
        fireEvent.click(button);

        
        expect(textarea).toHaveValue('');
    });
});
import { Board } from '../../models/board';
import { Piece } from '../../models/pieces/piece';
import { Point } from '../../models/pieces/point';
export declare abstract class AbstractPgnProcessor {
    protected pgn: string;
    protected currentIndex: number;
    abstract process(board: Board, sourcePiece: Piece, destPoint: Point, destPiece?: Piece): void;
    getPGN(): string;
    processChecks(checkmate: boolean, check: boolean, stalemate: boolean): void;
    reset(): void;
    addPromotionChoice(promotion: any): void;
    removeLast(): void;
}
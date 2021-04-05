import { King } from '../../models/pieces/king';
import { Pawn } from '../../models/pieces/pawn';
import { MoveUtils } from '../../utils/move-utils';
import { AbstractPgnProcessor } from './pgn-processor';
export class DefaultPgnProcessor extends AbstractPgnProcessor {
    process(board, sourcePiece, destPoint, destPiece) {
        this.currentIndex += 0.5;
        this.pgn += (this.currentIndex % Math.floor(this.currentIndex) === 0) ? (' ' + this.currentIndex + '. ') : ' ';
        let possibleCaptures = [];
        let possibleMoves = [];
        if (destPiece) {
            console.log('dest');
            possibleCaptures = MoveUtils.findPieceByPossibleCapturesContaining(MoveUtils.formatSingle(destPoint, board.reverted), board, sourcePiece.color).filter(piece => piece.constructor.name === sourcePiece.constructor.name);
        }
        possibleMoves = MoveUtils.findPieceByPossibleMovesContaining(MoveUtils.formatSingle(destPoint, board.reverted), board, sourcePiece.color).filter(piece => piece.constructor.name === sourcePiece.constructor.name);
        if (sourcePiece instanceof Pawn && !destPiece && possibleCaptures.length === 0) {
            this.pgn += MoveUtils.formatSingle(destPoint, board.reverted);
        }
        else {
            if (sourcePiece instanceof Pawn && destPiece) {
                this.pgn += MoveUtils.formatSingle(sourcePiece.point, board.reverted).substring(0, 1) + 'x' + MoveUtils.formatSingle(destPoint, board.reverted);
            }
            else {
                if (sourcePiece instanceof King && (Math.abs(sourcePiece.point.col - destPoint.col) === 2)) {
                    if (board.reverted) {
                        this.pgn += destPoint.col < 2
                            ? 'O-O'
                            : 'O-O-O';
                    }
                    else {
                        this.pgn += destPoint.col < 3
                            ? 'O-O-O'
                            : 'O-O';
                    }
                }
                else {
                    if (!(sourcePiece instanceof Pawn) && possibleCaptures.length === 0 && possibleMoves.length < 2) { // Nf3
                        this.pgn += MoveUtils.getFirstLetterPiece(sourcePiece) + MoveUtils.formatSingle(destPoint, board.reverted);
                    }
                    else {
                        if (possibleMoves && possibleMoves.length === 2 && possibleCaptures.length === 0) { // Nbd7
                            if (this.isEqualByCol(possibleMoves[0], possibleMoves[1])) {
                                this.pgn += MoveUtils.getFirstLetterPiece(sourcePiece) + sourcePiece.point.row + MoveUtils.formatSingle(destPoint, board.reverted);
                            }
                            else {
                                this.pgn += MoveUtils.getFirstLetterPiece(sourcePiece) + sourcePiece.point.col + MoveUtils.formatSingle(destPoint, board.reverted);
                            }
                        }
                        else {
                            if (possibleCaptures.length > 1) {
                                if (this.isEqualByCol(possibleCaptures[0], possibleCaptures[1])) {
                                    this.pgn += MoveUtils.getFirstLetterPiece(sourcePiece) + sourcePiece.point.row + 'x' + MoveUtils.formatSingle(destPoint, board.reverted);
                                }
                                else {
                                    this.pgn += MoveUtils.getFirstLetterPiece(sourcePiece) + sourcePiece.point.col + 'x' + MoveUtils.formatSingle(destPoint, board.reverted);
                                }
                            }
                            else {
                                this.pgn += MoveUtils.getFirstLetterPiece(sourcePiece) + 'x' + MoveUtils.formatSingle(destPoint, board.reverted);
                            }
                        }
                    }
                }
            }
        }
        this.pgn = this.pgn.trim();
        console.log(this.pgn);
    }
    resolvePieceByFirstChar(move, piece) {
        return MoveUtils.getFirstLetterPiece(piece) === move;
    }
    isEqualByCol(aPiece, bPiece) {
        return aPiece.point.col === bPiece.point.col;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1wZ24tcHJvY2Vzc29yLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0tvbXB1dGVyL0Rlc2t0b3AvTm93eSBmb2xkZXIvY2hlc3MtYm9hcmQvcHJvamVjdHMvbmd4LWNoZXNzLWJvYXJkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9lbmdpbmUvcGduL2RlZmF1bHQtcGduLXByb2Nlc3Nvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsb0JBQW9CO0lBRWxELE9BQU8sQ0FDVixLQUFZLEVBQ1osV0FBa0IsRUFDbEIsU0FBZ0IsRUFDaEIsU0FBaUI7UUFFakIsSUFBSSxDQUFDLFlBQVksSUFBSSxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUUvRyxJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFFdkIsSUFBSSxTQUFTLEVBQUU7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxxQ0FBcUMsQ0FDOUQsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUNqRCxLQUFLLEVBQ0wsV0FBVyxDQUFDLEtBQUssQ0FDcEIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlFO1FBQ0QsYUFBYSxHQUFHLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FDeEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUNqRCxLQUFLLEVBQ0wsV0FBVyxDQUFDLEtBQUssQ0FDcEIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNFLElBQUksV0FBVyxZQUFZLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVFLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pFO2FBQU07WUFDSCxJQUFJLFdBQVcsWUFBWSxJQUFJLElBQUksU0FBUyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxZQUFZLENBQzlCLFdBQVcsQ0FBQyxLQUFLLEVBQ2pCLEtBQUssQ0FBQyxRQUFRLENBQ2pCLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FDNUMsU0FBUyxFQUNULEtBQUssQ0FBQyxRQUFRLENBQ2pCLENBQUM7YUFDTDtpQkFBTTtnQkFDSCxJQUFJLFdBQVcsWUFBWSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDeEYsSUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO3dCQUNoQixJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs0QkFDekIsQ0FBQyxDQUFDLEtBQUs7NEJBQ1AsQ0FBQyxDQUFDLE9BQU8sQ0FBQztxQkFDakI7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7NEJBQ3pCLENBQUMsQ0FBQyxPQUFPOzRCQUNULENBQUMsQ0FBQyxLQUFLLENBQUM7cUJBQ2Y7aUJBQ0o7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLENBQUMsV0FBVyxZQUFZLElBQUksQ0FBQyxJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBTSxNQUFNO3dCQUN6RyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUMzRSxTQUFTLEVBQ1QsS0FBSyxDQUFDLFFBQVEsQ0FDakIsQ0FBQztxQkFDTDt5QkFBTTt3QkFDSCxJQUFJLGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLEVBQUssT0FBTzs0QkFDMUYsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUNqQixhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQ2hCLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FDbkIsRUFBRTtnQ0FDQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDckMsV0FBVyxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FDN0QsU0FBUyxFQUNULEtBQUssQ0FBQyxRQUFRLENBQ2pCLENBQUM7NkJBQ0w7aUNBQU07Z0NBQ0gsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsbUJBQW1CLENBQ3JDLFdBQVcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQzdELFNBQVMsRUFDVCxLQUFLLENBQUMsUUFBUSxDQUNqQixDQUFDOzZCQUNMO3lCQUNKOzZCQUFNOzRCQUNILElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQ0FDN0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUNqQixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFDbkIsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQ3RCLEVBQUU7b0NBQ0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUMsbUJBQW1CLENBQ3JDLFdBQVcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsWUFBWSxDQUNuRSxTQUFTLEVBQ1QsS0FBSyxDQUFDLFFBQVEsQ0FDakIsQ0FBQztpQ0FDTDtxQ0FBTTtvQ0FDSCxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDckMsV0FBVyxDQUFDLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQ25FLFNBQVMsRUFDVCxLQUFLLENBQUMsUUFBUSxDQUNqQixDQUFDO2lDQUNMOzZCQUNKO2lDQUFNO2dDQUNILElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLG1CQUFtQixDQUNyQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FDM0MsU0FBUyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQzVCLENBQUM7NkJBQ0w7eUJBQ0o7cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKO1FBRUQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxJQUFZLEVBQUUsS0FBWTtRQUN0RCxPQUFPLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUM7SUFDekQsQ0FBQztJQUVPLFlBQVksQ0FBQyxNQUFhLEVBQUUsTUFBYTtRQUM3QyxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2pELENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2JvYXJkJztcbmltcG9ydCB7IEtpbmcgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGllY2VzL2tpbmcnO1xuaW1wb3J0IHsgUGF3biB9IGZyb20gJy4uLy4uL21vZGVscy9waWVjZXMvcGF3bic7XG5pbXBvcnQgeyBQaWVjZSB9IGZyb20gJy4uLy4uL21vZGVscy9waWVjZXMvcGllY2UnO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvcGllY2VzL3BvaW50JztcbmltcG9ydCB7IE1vdmVVdGlscyB9IGZyb20gJy4uLy4uL3V0aWxzL21vdmUtdXRpbHMnO1xuaW1wb3J0IHsgQWJzdHJhY3RQZ25Qcm9jZXNzb3IgfSBmcm9tICcuL3Bnbi1wcm9jZXNzb3InO1xuXG5leHBvcnQgY2xhc3MgRGVmYXVsdFBnblByb2Nlc3NvciBleHRlbmRzIEFic3RyYWN0UGduUHJvY2Vzc29yIHtcblxuICAgIHB1YmxpYyBwcm9jZXNzKFxuICAgICAgICBib2FyZDogQm9hcmQsXG4gICAgICAgIHNvdXJjZVBpZWNlOiBQaWVjZSxcbiAgICAgICAgZGVzdFBvaW50OiBQb2ludCxcbiAgICAgICAgZGVzdFBpZWNlPzogUGllY2VcbiAgICApOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggKz0gMC41O1xuICAgICAgICB0aGlzLnBnbiArPSAodGhpcy5jdXJyZW50SW5kZXggJSBNYXRoLmZsb29yKHRoaXMuY3VycmVudEluZGV4KSA9PT0gMCkgPyAoJyAnICsgdGhpcy5jdXJyZW50SW5kZXggKyAnLiAnKSA6ICcgJztcblxuICAgICAgICBsZXQgcG9zc2libGVDYXB0dXJlcyA9IFtdO1xuICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtdO1xuXG4gICAgICAgIGlmIChkZXN0UGllY2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZXN0Jyk7XG4gICAgICAgICAgICBwb3NzaWJsZUNhcHR1cmVzID0gTW92ZVV0aWxzLmZpbmRQaWVjZUJ5UG9zc2libGVDYXB0dXJlc0NvbnRhaW5pbmcoXG4gICAgICAgICAgICAgICAgTW92ZVV0aWxzLmZvcm1hdFNpbmdsZShkZXN0UG9pbnQsIGJvYXJkLnJldmVydGVkKSxcbiAgICAgICAgICAgICAgICBib2FyZCxcbiAgICAgICAgICAgICAgICBzb3VyY2VQaWVjZS5jb2xvclxuICAgICAgICAgICAgKS5maWx0ZXIocGllY2UgPT4gcGllY2UuY29uc3RydWN0b3IubmFtZSA9PT0gc291cmNlUGllY2UuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcG9zc2libGVNb3ZlcyA9IE1vdmVVdGlscy5maW5kUGllY2VCeVBvc3NpYmxlTW92ZXNDb250YWluaW5nKFxuICAgICAgICAgICAgTW92ZVV0aWxzLmZvcm1hdFNpbmdsZShkZXN0UG9pbnQsIGJvYXJkLnJldmVydGVkKSxcbiAgICAgICAgICAgIGJvYXJkLFxuICAgICAgICAgICAgc291cmNlUGllY2UuY29sb3JcbiAgICAgICAgKS5maWx0ZXIocGllY2UgPT4gcGllY2UuY29uc3RydWN0b3IubmFtZSA9PT0gc291cmNlUGllY2UuY29uc3RydWN0b3IubmFtZSk7XG5cbiAgICAgICAgaWYgKHNvdXJjZVBpZWNlIGluc3RhbmNlb2YgUGF3biAmJiAhZGVzdFBpZWNlICYmIHBvc3NpYmxlQ2FwdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBnbiArPSBNb3ZlVXRpbHMuZm9ybWF0U2luZ2xlKGRlc3RQb2ludCwgYm9hcmQucmV2ZXJ0ZWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNvdXJjZVBpZWNlIGluc3RhbmNlb2YgUGF3biAmJiBkZXN0UGllY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBnbiArPSBNb3ZlVXRpbHMuZm9ybWF0U2luZ2xlKFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VQaWVjZS5wb2ludCxcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQucmV2ZXJ0ZWRcbiAgICAgICAgICAgICAgICApLnN1YnN0cmluZygwLCAxKSArICd4JyArIE1vdmVVdGlscy5mb3JtYXRTaW5nbGUoXG4gICAgICAgICAgICAgICAgICAgIGRlc3RQb2ludCxcbiAgICAgICAgICAgICAgICAgICAgYm9hcmQucmV2ZXJ0ZWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc291cmNlUGllY2UgaW5zdGFuY2VvZiBLaW5nICYmIChNYXRoLmFicyhzb3VyY2VQaWVjZS5wb2ludC5jb2wgLSBkZXN0UG9pbnQuY29sKSA9PT0gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkLnJldmVydGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBnbiArPSBkZXN0UG9pbnQuY29sIDwgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ08tTydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdPLU8tTyc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBnbiArPSBkZXN0UG9pbnQuY29sIDwgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ08tTy1PJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ08tTyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShzb3VyY2VQaWVjZSBpbnN0YW5jZW9mIFBhd24pICYmIHBvc3NpYmxlQ2FwdHVyZXMubGVuZ3RoID09PSAwICYmIHBvc3NpYmxlTW92ZXMubGVuZ3RoIDwgMikgeyAgICAgLy8gTmYzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBnbiArPSBNb3ZlVXRpbHMuZ2V0Rmlyc3RMZXR0ZXJQaWVjZShzb3VyY2VQaWVjZSkgKyBNb3ZlVXRpbHMuZm9ybWF0U2luZ2xlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RQb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5yZXZlcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZU1vdmVzICYmIHBvc3NpYmxlTW92ZXMubGVuZ3RoID09PSAyICYmIHBvc3NpYmxlQ2FwdHVyZXMubGVuZ3RoID09PSAwKSB7ICAgIC8vIE5iZDdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0VxdWFsQnlDb2woXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlTW92ZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGduICs9IE1vdmVVdGlscy5nZXRGaXJzdExldHRlclBpZWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUGllY2UpICsgc291cmNlUGllY2UucG9pbnQucm93ICsgTW92ZVV0aWxzLmZvcm1hdFNpbmdsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RQb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnJldmVydGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZ24gKz0gTW92ZVV0aWxzLmdldEZpcnN0TGV0dGVyUGllY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VQaWVjZSkgKyBzb3VyY2VQaWVjZS5wb2ludC5jb2wgKyBNb3ZlVXRpbHMuZm9ybWF0U2luZ2xlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzdFBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucmV2ZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NzaWJsZUNhcHR1cmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNFcXVhbEJ5Q29sKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVDYXB0dXJlc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlQ2FwdHVyZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZ24gKz0gTW92ZVV0aWxzLmdldEZpcnN0TGV0dGVyUGllY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUGllY2UpICsgc291cmNlUGllY2UucG9pbnQucm93ICsgJ3gnICsgTW92ZVV0aWxzLmZvcm1hdFNpbmdsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0UG9pbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQucmV2ZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBnbiArPSBNb3ZlVXRpbHMuZ2V0Rmlyc3RMZXR0ZXJQaWVjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VQaWVjZSkgKyBzb3VyY2VQaWVjZS5wb2ludC5jb2wgKyAneCcgKyBNb3ZlVXRpbHMuZm9ybWF0U2luZ2xlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RQb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5yZXZlcnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGduICs9IE1vdmVVdGlscy5nZXRGaXJzdExldHRlclBpZWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlUGllY2UpICsgJ3gnICsgTW92ZVV0aWxzLmZvcm1hdFNpbmdsZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc3RQb2ludCwgYm9hcmQucmV2ZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBnbiA9IHRoaXMucGduLnRyaW0oKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wZ24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzb2x2ZVBpZWNlQnlGaXJzdENoYXIobW92ZTogc3RyaW5nLCBwaWVjZTogUGllY2UpIHtcbiAgICAgICAgcmV0dXJuIE1vdmVVdGlscy5nZXRGaXJzdExldHRlclBpZWNlKHBpZWNlKSA9PT0gbW92ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRXF1YWxCeUNvbChhUGllY2U6IFBpZWNlLCBiUGllY2U6IFBpZWNlKSB7XG4gICAgICAgIHJldHVybiBhUGllY2UucG9pbnQuY29sID09PSBiUGllY2UucG9pbnQuY29sO1xuICAgIH1cblxufVxuIl19